import React from 'react'

export const Form = () => {
  return (
    <div>
        <div className='form'>
            <div className='input-text-and-message'>{/*  Name */}
                <p className='title-input'>
                    Name
                </p>
                <div className='input '>
                    <p className='input-text'>
                        Name
                    </p>
                </div>
            </div>
            <div className='input-text-and-message'>{/*  company */}
                <p className='title-input'>
                    Company
                </p>
                <div className='input '>
                    <p className='input-text'>
                        Company
                    </p>
                </div>
            </div>
            <div className='input-text-and-message'> {/* e-mail */}
                <p className='title-input'>
                    e-mail
                </p>
                <div className='input '>
                    <p className='input-text'>
                        e-mail
                    </p>
                </div>
            </div>
            <div className='container-message'>{/* Message */}
                <p className='title-input'>
                    Message
                </p>
                <div className='input-message '>
                    <p className='input-text'>
                        Message
                    </p>
                </div>
            </div>
            <div>{/* Message */}
                <div className='form-button '>{/*  button */}
                    <p className='form-button-text'>
                        Send
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
