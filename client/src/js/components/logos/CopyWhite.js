import React, {Component} from "react"

class CopyWhite extends Component {
	//check mark
	////d="M7 14.729l.855-1.151c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.326-4.033-3.911zm15-11.729v21h-20v-21h4.666l-2.666 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"/>
	render() {
		const { callback } = this.props;
		return (
            <svg className="github" width="24" height="24" viewBox="0 0 24 24" onClick={callback}>
                <path fill="white" d="M17.391 3l2.609 2.808v7.736c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-16.192l2.666-2.808h-4.666v21h20v-21h-4.609zm2.609 19h-3.824c1.377-1.103 2.751-2.51 3.824-3.865v3.865zm-14.297-15h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"/>
            </svg>
		);
	}
}

export default CopyWhite