import React from 'react';
import './quick-search.css';
import QuickSearchImage from '../../assets/images/quick-seatch-image-1.jpg';
import QuickSearchDobermanImage from '../../assets/images/dog-breeds/doberman.jpg';
import QuickSearchBernardImage from '../../assets/images/dog-breeds/st-bernard.jpg';
import QuickSearchChihuahuaImage from '../../assets/images/dog-breeds/chihuahua.jpg';
import QuickSearchGreyhoundImage from '../../assets/images/dog-breeds/greyhound.jpg';
import Isotope from "isotope-layout/js/isotope";

class QuickSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleDogBreedSearch = this.handleDogBreedSearch.bind(this);
  }

  componentDidMount() {
    this.iso = new Isotope(`.grid`, {
      itemSelector: `.grid-item`,
      layoutMode: "fitRows"
    });
  }

  handleDogBreedSearch(e) {
    if (e.keyCode === 13) {
      alert('Enter key has been pressed');
      return;
    }

    let searchText = e.target.value;

    if (searchText) {
      this.iso.arrange({
        filter: (itemElem) => {
          return Array.from(itemElem.classList).some((el) => {
            if (el !== 'grid-item') {
              return el.includes(searchText);
            }

            return false;
          });
        }
      });
    } else {
      this.iso.arrange({filter: '*'});
    }
  }

  render() {
    return (
      <div className={'quick-search-container'} style={{backgroundImage: `url(${QuickSearchImage})`}}>
        <div>
          <p>Pronadjite pravog prijatelja</p>
          <p>Pretrazite preko 2393 aktivnih oglasa i pronadjite kucnog ljubimca za vas</p>
          <div>
            <div>
              <select name="quick-search-pet-type" id="quick-search-pet-type">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="pet">Pet</option>
              </select>
              <input type="text" placeholder={'Pocnite da kucate naziv rase..'} onKeyUp={this.handleDogBreedSearch}/>
              <button type={'button'}>Pretraga</button>
            </div>
            <div className="grid">
              <div className="grid-item doberman"
                   style={{backgroundImage: `url(${QuickSearchDobermanImage})`}}>Doberman
              </div>
              <div className="grid-item bernard" style={{backgroundImage: `url(${QuickSearchBernardImage})`}}>St.
                Bernard
              </div>
              <div className="grid-item chihuahua"
                   style={{backgroundImage: `url(${QuickSearchChihuahuaImage})`}}>Chihuahua
              </div>
              <div className="grid-item greyhound"
                   style={{backgroundImage: `url(${QuickSearchGreyhoundImage})`}}>Greyhound
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickSearch;