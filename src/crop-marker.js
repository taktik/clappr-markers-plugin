import { $ } from 'clappr'
import BaseMarker from './base-marker'

/*
 * An implementation of an image Marker, which can show an image.
 */
export default class CropMarker extends BaseMarker {

  /*
   * time: the time in seconds that this marker represents
   * tooltipImage: the image to be shown (optional)
   * width: width for the image (Default: 200px)
   * height: height for the image (Default: auto)
   */
	constructor (time, duration) {
		super(time)
		this._duration = duration || 5
	}

  /*
   * Returns the duration (in seconds) that this marker represents.
   */
	getDuration () {
		return this._duration
	}

	_buildMarkerEl () {
		var $marker = $('<div />').addClass('crop-marker')

		$marker.append($('<div id="wgrip"/>').addClass('crop-marker-handle').addClass('ui-resizable-handle').addClass('ui-resizable-w').addClass('left'))
		$marker.append($('<div id="egrip"/>').addClass('crop-marker-handle').addClass('ui-resizable-handle').addClass('ui-resizable-e').addClass('right'))
		
		jQuery($marker[0]).resizable({
		    handles: {
		        'w': '#wgrip',
        		'e': '#egrip'
		    },
		    resize: function( event, ui ) {
  				ui.originalElement.css({
  					'left':(''+((1.0*ui.position.left/ui.originalElement.parents('.bar-container').width())*100.0))+'%',
	  				'width':(''+((1.0*ui.size.width/ui.originalElement.parents('.bar-container').width())*100.0))+'%'
	  			})
			},
		    maxHeight: 20,
		    minHeight: 20
		});
		
		return $marker
	}

}
