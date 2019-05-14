import React, { Component } from 'react'
import Recipe from '../components/Recipe'
import { sampleData } from '../testData'

class RecipeContainer extends Component {

  state = {
    isLoading: true,
    recipe: null
  }
  componentDidMount() {
    this.loadRecipe()
      .then((data) => {
        this.setState({
          isLoading: false,
          recipe: data
        })
      })
  }
  loadRecipe = () => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(sampleData)
      }, 1000)
    })
  }
  
  render() {
    const { isLoading, recipe } = this.state;
    return <Recipe 
      recipe={recipe} 
      isLoading={isLoading} />
  }
}

export default RecipeContainer