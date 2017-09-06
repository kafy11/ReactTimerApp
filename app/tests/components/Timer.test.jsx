var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
    it('should set state to started and Timer', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      },1001);
    });

    it('should pause Timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      },1001);
    });

    it('should stop Timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      },1001);
    });
  });
});
