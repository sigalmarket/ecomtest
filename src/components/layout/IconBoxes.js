import React from 'react';

export default () => {
  return (
    <div className='icon_boxes'>
      <div className='container'>
        <div className='row icon_box_row'>
          <div className='col-lg-4 icon_box_col'>
            <div className='icon_box'>
              <div className='icon_box_image'>
                <img src='images/icon_1.svg' alt='' />
              </div>
              <div className='icon_box_title'>Free Shipping Worldwide</div>
              <div className='icon_box_text'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 icon_box_col'>
            <div className='icon_box'>
              <div className='icon_box_image'>
                <img src='images/icon_2.svg' alt='' />
              </div>
              <div className='icon_box_title'>Free Returns</div>
              <div className='icon_box_text'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 icon_box_col'>
            <div className='icon_box'>
              <div className='icon_box_image'>
                <img src='images/icon_3.svg' alt='' />
              </div>
              <div className='icon_box_title'>24h Fast Support</div>
              <div className='icon_box_text'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
