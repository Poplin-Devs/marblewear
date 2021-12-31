import React from 'react';
import Reviews from './Reviews/Reviews.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import QuestionList from './Q&A/Q&Alist.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

import Reviewsdata from './Reviews/reviewsData.js';
import QuestionListdata from './Q&A/Q&AlistData.js';
import relatedItemsdata from './RelatedItems/relatedItemsData.js';
import productListDummyData  from './ProductDetails/sampledata/productListDummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: '39333',
      currentStyleID: 234004,
      productList: productListDummyData,
      reviews: [],
      questionList: QuestionListdata,
      relatedItems: relatedItemsdata,

    };
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);

  }
  changeCurrentStyle(id) {
    this.setState({currentStyleID: id});
  }


  render () {
    return (
      <div>
        <h1> Hello World </h1>
        <ProductOverview
          productList={this.state.productList}
          currentProductID={this.state.currentProductID}
          currentStyleID={this.state.currentStyleID}
          changeCurrentStyle={this.changeCurrentStyle}
        />
        <Reviews productId={Reviewsdata}/>
        <QuestionList
          data={this.state.questionList.QuestionListdata.QuestionList}
          currentProductID={this.state.currentProductID}
          answerParser={this.state.questionList.QuestionListdata.answerParser}/>
        <RelatedItems relatedItemsdata={this.state.relatedItems}/>
      </div>
    );
  }
}


export default App;