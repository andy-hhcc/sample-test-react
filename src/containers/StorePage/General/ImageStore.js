// TODO:
// Implement method handle image upload success and passing image received from server to ImageUploader
import React from 'react';
import Dropzone from 'react-dropzone';
import Box from 'components/Box';
import Gallery from 'components/Gallery';
import FileUploader from 'components/FileUploader';

export default class ImageStore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imagesUpload: [],
		}
		this.onDrop = this.onDrop.bind(this);
	}

	onDrop(e) {
		const prevState = Object.assign({}, this.state);
		prevState.imagesUpload = prevState.imagesUpload.concat(e);
		this.setState({
			imagesUpload: prevState.imagesUpload,
		});
	}

	render() {
		const images = this.state.imagesUpload.map((o) => ({
			src: o.preview,
			thumbnail: o.preview,
		}));
		return (
			<Box
				title="Image Store" 
			>
				<div className="col-sm-12">
					<Gallery
						show={false} 
						images={images}
					/>
				</div>
				<div className="col-sm-12">
          <FileUploader
            onDrop={this.onDrop}
            multiple={false}
            accept="image/*"
          />
				</div>
			</Box>
		)
	}
}
