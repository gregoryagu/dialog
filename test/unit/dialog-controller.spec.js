import {DialogController} from '../../src/dialog-controller';
import {Container} from 'aurelia-dependency-injection';
import {BehaviorInstance} from 'aurelia-templating';

describe('the Dialog Controller', () => {
  let dialogController,
    renderer,
    settings;

  beforeEach(() => {
    new Container().makeGlobal();
    settings = { name: 'Test' };
    dialogController = new DialogController(renderer, settings);
  });
  it('should be created with a settings property', () => {
    expect(dialogController.settings).toEqual(settings);
  });
  it('should call close with success when ok method called', () => {
    let calledValue = 'Worked';
    spyOn(dialogController, 'close');
    dialogController.ok(calledValue);
    expect(dialogController.close).toHaveBeenCalledWith(true, calledValue);
  });
  it('should call close without success when cancel method called', () => {
    let calledValue = 'Didnt work';
    spyOn(dialogController, 'close');
    dialogController.cancel(calledValue);
    expect(dialogController.close).toHaveBeenCalledWith(false, calledValue);
  });
});
