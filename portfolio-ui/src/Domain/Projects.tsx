import React, { Component, Props, ReactNode } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

type ProjectProps = {
    name: string,
    description: string,
    applicationUrl: string,
    sourceCodeUrl: string
}

class Projects extends Component<ProjectProps, {}>{

    render(): ReactNode {
        return ( 
            <Toast>
              <Toast.Header
                closeButton={false}>
                <strong className="mr-auto">{this.props.name}</strong>
              </Toast.Header>
              <Toast.Body>{this.props.description}</Toast.Body>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Button 
                            variant="outline-primary"
                            size="lg"
                            disabled={this.props.applicationUrl.length === 0}
                            href={this.props.applicationUrl}>
                                Working version
                        </Button>
                        <Button 
                            variant="outline-primary"
                            disabled={this.props.applicationUrl.length === 0}
                            href={this.props.sourceCodeUrl}
                            size="lg">
                                Source code
                        </Button>
                    </div>
                </div>
              </div>
            </Toast>
         );
    }
}

export default Projects;