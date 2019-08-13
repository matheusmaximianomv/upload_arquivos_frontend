import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './style';

export default class Upload extends Component {

    renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive) {
            return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
        }
        if(isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        }

        return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
    } 

    render() {

        const { onUpload } = this.props;

        return (
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps() /* Elemento Com funcionalidade de upload*/}
                        isDragActive={isDragActive /* Quando estiver passando um arquivo pela área */}
                        isDragReject={isDragReject /* Quando estiver passando um arquivo inválido pela área */}
                    >
                        <input {...getInputProps() /* Faz com que o input tenha todas as propriedades necessárias */} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                ) }
            </Dropzone>
        );
    }
}