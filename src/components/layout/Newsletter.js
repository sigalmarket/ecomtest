import React from 'react';

export default () => {
  return (
    <div className='newsletter'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='newsletter_border' />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            <div className='newsletter_content text-center'>
              <div className='newsletter_title'>
                Subscribe to our newsletter
              </div>
              <div className='newsletter_text'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie eros
                </p>
              </div>
              <div className='newsletter_form_container'>
                <form
                  action='#'
                  id='newsletter_form'
                  className='newsletter_form'
                >
                  <input
                    type='email'
                    className='newsletter_input'
                    required='required'
                  />
                  <button className='newsletter_button trans_200'>
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
