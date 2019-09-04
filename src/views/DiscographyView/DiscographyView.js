import React, { Component } from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Utilities
import styles from './DiscographyView.module.scss';
import { fetchDiscography as fetchDiscographyAction } from '../../actions/discographyActions';

// Components
import SectionTitle from '../../components/complex/SectionTitle/SectionTitle';
import SectionDescription from '../../components/complex/SectionDescription/SectionDescription';
import Box from '../../components/complex/Box/Box';
import TimelineHeader from '../../components/complex/TimelineHeader/TimelineHeader';



class DiscographyView extends Component {

   ButtonBackgrounds = [
    '/assets/images/discography-button-1-bg.png', 
    '/assets/images/discography-button-2-bg.png',
    '/assets/images/discography-button-3-bg.png'
   ];

  componentDidMount() {
    const { fetchDiscography } = this.props;
    fetchDiscography();
  }

  render() {
    const { discography } = this.props;

    return (
      <React.Fragment>
        <article
          id="discography"
          className={styles.article}
        >
          <div className={styles.wrapper}>
            <SectionTitle textCustomize="clipping-mask">Discography</SectionTitle>
            <SectionDescription>
              September 4 world heard Night Visions, the first full album. He reached the 2 position
              in the chart Billboard 200. The single «It&#39;s Time» took 22 th place in the
              Billboard Hot 100, 4th in the Billboard Alternative and Billboard Rock, and now went
              platinum.
            </SectionDescription>

            {discography
              ? discography.map((item, key) => (
                  <div key={item.id} className={styles.track}>
                    <TimelineHeader title={item.year}>{item.subText}</TimelineHeader>
                    <Box
                      header={item.header}
                      text={item.text}
                      buttonText="PLAY"
                      buttonBgImage={this.ButtonBackgrounds[key]}
                      buttonClass="secondary"
                      invertTextColor={key === 0 || false }
                    />
                  </div>
                ))
              : null}
          </div>
        </article>
      </React.Fragment>
    );
  }
}

DiscographyView.defaultProps = {
  discography: [],
};

DiscographyView.propTypes = {
  fetchDiscography: PropTypes.func.isRequired,
  discography: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      subText: PropTypes.string.isRequired,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};

const mapStateToProps = state => {
  const { discography } = state.discographyReducer;

  return { discography };
};

const mapDispatchToProps = dispatch => ({
  fetchDiscography: () => dispatch(fetchDiscographyAction('discography')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscographyView);
