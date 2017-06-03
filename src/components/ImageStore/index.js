import React from 'react';
import Box from 'components/Box';
import Dropzone from 'react-dropzone';
export default class ImageStore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imagesUpload: [],
		}
		this.onImageDrop = this.onImageDrop.bind(this);
	}

	onImageDrop(e) {
		const prevState = Object.assign({}, this.state);
		prevState.imagesUpload = prevState.imagesUpload.concat(e);
		this.setState({
			imagesUpload: prevState.imagesUpload,
		});
	}

	render() {
		return (
			<Box
				title="Image Store" 
			>
				<div className="col-sm-12">
					{
						this.state.imagesUpload.map((o, index) => (
							<img src={o.preview} key={`img-${index}`} width={200} />
						))
					}
				</div>
				<div className="col-sm-12">
          <Dropzone
          	style={{
          		height: 100,
          		border: '2px dashed #ddd',
          		borderRadius: 3,
          		display: 'flex',
          		alignItems: 'center',
          		justifyContent: 'center'

          	}}
            onDrop={this.onImageDrop}
            multiple={false}
            accept="image/*">
            <div>Drag and drop images to upload or Browse</div>
          </Dropzone>
				</div>
			</Box>
		)
	}
}
