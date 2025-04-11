import React from 'react'

export const Studies = () => {
  return (
    <div>
        <div className='my-studies  '> {/* education container */}
          <div>
          <p className='education'>Education</p>
          </div>
        </div>
        <div className='my-studies'> {/* studies */}

              <div className='my-studies-front'> {/* frontend */}
                  <div className='my-studies-title1'>{/* Front-end-title */}
                      <p>Front-end dev</p>

                  </div>{/* Front-end-title */}
                  <div className='my-studies-line'>{/* Line */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="600" viewBox="0 0 4 600" fill="none">
                          <path d="M2 0L2 600" stroke="#970E32" strokeWidth="3" className='line' />
                      </svg>
                  </div>{/* Line-end*/}
                  <div>{/* Info Web development */}
                      <div className='my-studies-year-and-title'>
                          <p className='my-studies-title'>
                              WEB DEVELOPMENT
                          </p>
                      </div>
                      <div className='my-studies-them'>
                          <ul className='my-studies-li li '>
                              <li> HTML</li>
                              <li>CSS: Box modeling, Flexbox, Media queries</li>
                              <li>SASS</li>
                              <li>Bootstrap</li>
                              <li>Java Script</li>
                              <li>Node.js</li>
                              <li>React js</li>
                          </ul>
                      </div>
                      <div>
                          <div className='my-studies-year-and-title'>
                              <p className='my-studies-title'>
                                  JAVA SCRIPT
                              </p>
                          </div>
                      </div>
                      <div>
                          <div className='my-studies-year-and-title'>
                              <p className='my-studies-title'>
                                  REACT
                              </p>
                          </div>

                      </div>
                  </div>

              </div>{/* frontend/end */}

          </div><div className='my-studies'>
              <div className=' my-studies-front'> {/* frontend */}
                  <div className='my-studies-title1'>{/* Front-end-title */}
                      <p>Product Design</p>

                  </div>{/* Front-end-title */}
                  <div className='my-studies-line'>{/* Line */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="600" viewBox="0 0 4 600" fill="none">
                          <path d="M2 0L2 600" stroke="#970E32" strokeWidth="3" className='line' />
                      </svg>
                  </div>{/* Line-end*/}
                  <div>{/* Info Web development */}
                      <div className='my-studies-year-and-title'>
                          <p className='my-studies-title'>
                              UX - UI
                          </p>
                      </div>
                      <div className='my-studies-them'>
                          <ul className='my-studies-li li'>
                              <li>Research</li>
                              <li>POV </li>
                              <li>Design Thinking</li>
                              <li>MVP</li>
                              <li>Figma</li>
                              <li>A B Tests</li>
                              <li>Customer Development</li>
                          </ul>
                      </div>
                      <div>
                          <div className='my-studies-year-and-title'>
                              <p className='my-studies-title'>
                                  PROTOTIPE
                              </p>
                          </div>
                      </div>
                      <div>
                          <div className='my-studies-year-and-title'>
                              <p className='my-studies-title'>
                                  UI
                              </p>
                          </div>
                      </div>
                      <div>
                          <div className='my-studies-year-and-title'>
                              <p className='my-studies-title'>
                                  PRODUCT MANAGER
                              </p>
                          </div>

                      </div>
                  </div>


              </div>{/* frontend/end */}
          </div>
          </div> 
    
  )
}
