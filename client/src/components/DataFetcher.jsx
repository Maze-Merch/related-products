import React from 'react';

const DataFetcher = () => {

  async fetchProductDetails(id) {
    // const { prodDetails } = this.state;
    const response = await fetch(`http://52.26.193.201:3000/products/${id}`);
    const details = await response.json();
    this.productDetailsArr.push(details);
    // prodDetails.push(details);
  }

  async fetchProductStyles(id) {
    // const { prodStyles } = this.state;
    const response = await fetch(`http://52.26.193.201:3000/products/${id}/styles`);
    const styles = await response.json();
    this.productStylesArr.push(styles.results);
    // prodStyles.push(styles.results);
  }

  mergeObjects() {
    for (let i = 0; i < this.prodDetailsArr.length; i += 1) {
      // if this.prodDetailsArr[i].id === this.productStylesArr[i].product_id
      for (let j = 0; j < this.productStylesArr[0].results.length; j += 1) {
        const mergedObj = Object.assign(this.prodDetailsArr[i], this.productStylesArr.results[j]);
        this.products.push(mergedObj);
      }
    }
  }

}

export default DataFetcher;

// const { mainProdId } = this.state;
    // fetch(`http://52.26.193.201:3000/products/${mainProdId}/related`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.relatedIdArr = [...new Set(data)];
    //     // this.relatedIdArr.sort();
    //     console.log(this.relatedIdArr);
    //     for (let i = 0; i < this.relatedIdArr.length; i += 1) {
    //       this.fetchProductDetails(this.relatedIdArr[i]);
    //       this.fetchProductStyles(this.relatedIdArr[i]);
    //     }
    //   })
    //   .catch((err) => console.log('Error getting related prod ids', err));
    // this.setState({ prodDetails: this.productDetailsArr, prodStyles: this.productStylesArr });