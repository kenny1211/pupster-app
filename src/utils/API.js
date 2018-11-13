// import axios 
import axios from 'axios';

export default {
  // get random dog imag:e
  getRandomDog: function() {
    return axios.get('https://dog.ceo/api/breeds/image/random')
  },
  // get list of dogs by breed
  getDogList: function(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
  },
  // get list of all dog breeds
  getDogBreeds: function() {
    return axios.get('https://dog.ceo/api/breeds/list')
  }
}
