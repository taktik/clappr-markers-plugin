import EventEmitter from 'event-emitter'

/*
 * This represents and Marker and should be extended.
 */
export default class Marker {

  constructor() {
    this._emitter = new EventEmitter({});
    this.initAttributes();
  }

  /*
   * Get the event emitter.
   * Used by the plugin and notifyTooltipChanged() method
   */
  getEmitter() {
    return this._emitter
  }

  /*
   * Call this to notify the plugin that the time of the marker
   * has changed so that it's position can be recalculated and changed
   * if necessary.
   */
  notifyTimeChanged() {
    this._emitter.emit("timeChanged")
  }

  /*
   * Call this to notify the plugin that the contents of the tooltip
   * has changed so that it's position will be recalculated and changed
   * if necessary.
   */
  notifyTooltipChanged() {
    this._emitter.emit("tooltipChanged")
  }

  /*
   * Should return the time (in seconds) that this marker represents.
   */
  getTime() {
    throw "Not implemented!"
  }

  /*
   * Should return the dom element which should represent the marker.
   * It will be inserted onto the seek bar and kept at the correct location.
   */
  getMarkerEl() {
    throw "Not implemented!"
  }

  /*
   * Should return the dom element which is the tool tip,
   * or null if there is no tool tip for this marker.
   *
   * The tooltip will placed above the marker element, inside a container,
   * and this containers position will be managed for you.
   */
  getTooltipEl() {
    throw "Not implemented!"
  }

  /*
   * Called when the marker is removed.
   */
  onDestroy() {
    // default to doing nothing
  }

  initAttributes(){
      this.videoDuration = 0;
  }
}
