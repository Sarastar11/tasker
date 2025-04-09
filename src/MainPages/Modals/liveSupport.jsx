import React from "react";
import './modals.css';

function LiveSupport({ isOpen, onClose }) {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="liveSupport_modalOverlay">
            <div className="liveSupport_container">
                {/* Header */}
                <div className="liveSupport_header">
                    <h3>Tasker24 Support Team</h3>
                    <button className="liveSupport_closeBtn" onClick={onClose}>
                        ✕
                    </button>
                </div>

                {/* Privacy Consent */}
                <div className="liveSupport_privacy">
                    <span className="liveSupport_infoIcon">ⓘ</span>
                    <p>
                        <strong>PRIVACY CONSENT:</strong> By using this chat, you consent to the collection, recording, and use of this chat session and information you submit by Tasker24 and its service providers.
                    </p>
                </div>

                {/* Chat Messages */}
                <div className="liveSupport_messages">
                    <div className="liveSupport_message">
                        <p>Hello! How we can help you?</p>
                        <span className="liveSupport_timestamp">12:09 PM</span>
                    </div>
                </div>

                {/* Quick Questions */}
                <div className="liveSupport_quickQuestions">
                    <button className="liveSupport_questionBtn">How do I book a service?</button>
                    <button className="liveSupport_questionBtn">How do I find the right employee?</button>
                    <button className="liveSupport_questionBtn">Can I cancel my booking?</button>
                    <button className="liveSupport_questionBtn">How do I pay?</button>
                </div>

                {/* WhatsApp Button */}
                <div className="liveSupport_whatsapp">
                    <button className="liveSupport_whatsappBtn">
                        <span className="liveSupport_whatsappIcon">📱</span> Technical Support
                    </button>
                </div>

                {/* Input Area */}
                <div className="liveSupport_inputArea">
                    <p className="liveSupport_warning">Don't share any personal information</p>
                    <div className="liveSupport_inputWrapper">
                        <input
                            type="text"
                            placeholder="Enter your message"
                            className="liveSupport_input"
                        />
                        <button className="liveSupport_sendBtn">▶</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LiveSupport;