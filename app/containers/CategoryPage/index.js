/**
 *
 * CategoryPage
 *
 */

import React from 'react';
import { Row, Col, Pagination } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SubNavbar from 'components/SubNavbar';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import PageHero from './PageHero';
import Category from './Category';
import PopularProducts from './PopularProducts';
import ProductFilters from './ProductFilters';
import ProductAdvert from './ProductAdvert';

import PaginationForm from './PaginationForm';
import ProductCard from './ProductCard';

import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './category-page.css';

export class CategoryPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="wrap-res-nav">
          <SubNavbar />
        </div>
        <PageHero />
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={22} xxl={20}>
            <div className="cats-wapper">
              <div className="cats-wapper-one">
                <Category />
                <PopularProducts />
                <ProductFilters />
                <ProductAdvert />
              </div>
              <div className="cats-wapper-two">
                <PaginationForm />
                <ProductCard />
                <div className="pagination-wrap">
                  <Pagination defaultCurrent={1} total={50} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  categorypage: makeSelectCategoryPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categoryPage', reducer });
const withSaga = injectSaga({ key: 'categoryPage', saga });

export default compose(withReducer, withSaga, withConnect)(CategoryPage);