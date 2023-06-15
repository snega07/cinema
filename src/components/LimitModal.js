import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
function LimitModal(props) {
    return (
        <div>
            <Modal
                size="lg"
                isOpen={props.model}
                toggle={() => props.setModel(!props.model)}

            >
                <ModalHeader
                    toggle={() => props.setModel(!props.model)}> <span>Set Review Limit</span></ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <input placeholder='Enter limit' name='limit' className='form-control' onChange={props.handleChange} />
                        </div><br />
                        <button className='btn btn-success' style={{
                            backgroundColor: "#FFA500",
                            borderColor: "#FFA500",
                            color: "black",
                        }} type="submit" onClick={props.saveLimit}>Set Limit</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LimitModal;