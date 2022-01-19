import React from 'react';
import {useLoading, Puff} from '@agney/react-loading';

export default function LoadingPage() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="100" />,
      });
      return (
        <div className="container loadingPage">
          <div className="row align-items-center">
            <div className="col">
              <section {...containerProps}>
                {indicatorEl} {/* renders only while loading */}
                <h4>Loading...</h4>
              </section>
            </div>
          </div>
        </div>
      );
}
