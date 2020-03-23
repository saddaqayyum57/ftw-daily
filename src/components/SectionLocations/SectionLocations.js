import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import darmstadtImage from './images/darmstadt.jpg';
import hannoverImage from './images/hannover.jpg';
import stuttgartImage from './images/stuttgart.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Darmstadt',
          darmstadtImage,
          '?address=Darmstadt%2C%Germany&bounds=49.95388%2C8.749719%2C49.795641%2C8.559924&origin=49.872825%2C8.651193'
        )}
        {locationLink(
          'Hannover',
          hannoverImage,
          '?address=Hannover%2C%Germany&bounds=52.454422%2C9.918508%2C52.304911%2C9.604435&origin=52.375892%2C9.73201'
        )}
        {locationLink(
          'Stuttgart',
          stuttgartImage,
          '?address=Stuttgart%2C%Germany&bounds=48.866399%2C9.315825%2C48.692019%2C9.038605&origin=48.775846%2C9.182932'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
