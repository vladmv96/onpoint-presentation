import React, { Component } from 'react';
import './styles/App.css';
import background from './images/background.png';
import arrow from './images/arrow.svg';
import ice1 from './images/ice1.png';
import ice2 from './images/ice2.png';
import ice3 from './images/ice3.png';
import ice4 from './images/ice4.png';
import shape from './images/shape.svg';
import shapeActive from './images/shape-active.png';
import ice11 from './images/ice1-1.png';
import ice12 from './images/ice1-2.png';
import ice13 from './images/ice1-3.png';
import poligon from './images/polygon.png';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';

let appStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: '100%',
  height: '2304px',
  width: '1024px'
};

  


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedNav: '#f78b1f',
      defaultNav: '#ffffff',
      firstNav: '#f78b1f',
      secondNav: '#ffffff',
      thirdNav: '#ffffff'
    }
  }

  moveAt = (e) => {
    if (e.pageX >= 647) {
        this.toThird();
        document.getElementById('poligon').style.marginLeft = e.pageX - 150 + 'px';
        document.getElementById('shape-active').style.width = e.pageX -210 + 'px';
        console.log(document.getElementById('poligon').style.marginLeft);
      } else if (e.pageX >= 372) {
        this.toSecond();
        document.getElementById('poligon').style.marginLeft = e.pageX - 150 + 'px';
        document.getElementById('shape-active').style.width = e.pageX -210 + 'px';
      } else {
        this.toFirst();
        document.getElementById('poligon').style.marginLeft = e.pageX - 150 + 'px';
        document.getElementById('shape-active').style.width = e.pageX -210 + 'px';
      }
  }

  touchMoveAt = (e) => {
    if (e.touches[0].pageX >= 647) {
        this.toThird();
        document.getElementById('poligon').style.marginLeft = e.touches[0].pageX - 150 + 'px';
        document.getElementById('shape-active').style.width = e.touches[0].pageX - 210 + 'px';
      } else if (e.touches[0].pageX >= 372) {
        this.toSecond();
        document.getElementById('poligon').style.marginLeft = e.touches[0].pageX - 150 + 'px';
        document.getElementById('shape-active').style.width = e.touches[0].pageX - 210 + 'px';
      } else {
        this.toFirst();
        document.getElementById('poligon').style.marginLeft = e.touches[0].pageX - 150 + 'px';
        document.getElementById('shape-active').style.width = e.touches[0].pageX - 210 + 'px';
      }
  }

  mouseMove = (e) => {
    document.getElementById('poligon').ondragstart = () => {
      return false;
    };
    document.onmousemove = (e) => {
      this.moveAt(e);
    }
    document.getElementById('poligon').onmouseup = (e) => {
      document.onmousemove = null;
      document.getElementById('poligon').onmouseup = null;
      if (e.pageX >= 647) {
      document.getElementById('poligon').style.marginLeft = 610 + 'px';
      document.getElementById('shape-active').style.width = e.pageX - 210 + 'px';
        this.toThird();
      } else if (e.pageX >= 372) {
        document.getElementById('poligon').style.marginLeft = 335 + 'px';
        document.getElementById('shape-active').style.width = e.pageX - 210 + 'px';
        this.toSecond();
      } else {
        document.getElementById('poligon').style.marginLeft = 60 + 'px';
        document.getElementById('shape-active').style.width = e.pageX - 210 + 'px';
        this.toFirst();
      }
    }
  }

  touchMove = (e) => {
    document.getElementById('poligon').ondragstart = () => {
      return false;
    };
    document.ontouchmove = (e) => {
      this.touchMoveAt(e);
    }
    document.getElementById('poligon').ontouchend = (e) => {
      document.ontouchmove = null;
      document.getElementById('poligon').ontouchend = null;
      if (e.changedTouches[0].pageX >= 647) {
      document.getElementById('poligon').style.marginLeft = 610 + 'px';
      document.getElementById('shape-active').style.width = e.changedTouches[0].pageX - 210 + 'px';
        this.toThird();
      } else if (e.changedTouches[0].pageX >= 372) {
        document.getElementById('poligon').style.marginLeft = 335 + 'px';
        document.getElementById('shape-active').style.width = e.changedTouches[0].pageX - 210 + 'px';
        this.toSecond();
      } else {
        document.getElementById('poligon').style.marginLeft = 60 + 'px';
        document.getElementById('shape-active').style.width = e.changedTouches[0].pageX - 210 + 'px';
        this.toFirst();
      }
    }
  }

  scrollTo = (element, to, duration) => {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        this.scrollTo(element, to, duration - 10);
    }, 10);
}

  handleScroll = () => {
    if (window.pageYOffset >= 769) {
      this.setState({ firstNav: this.state.defaultNav, secondNav: this.state.defaultNav, thirdNav: this.state.selectedNav });
    } else if (window.pageYOffset >= 20) {
      this.setState({ firstNav: this.state.defaultNav, secondNav: this.state.selectedNav, thirdNav: this.state.defaultNav });
    } else {
      this.setState({ firstNav: this.state.selectedNav, secondNav: this.state.defaultNav, thirdNav: this.state.defaultNav });
    }
  }

  componentWillMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }


  toFirst = () => {
      document.getElementById('poligon').style.marginLeft = 60 + 'px';
      document.getElementById('shape-active').style.width = 0 + 'px';
      document.getElementById('first-slide').style.left = "0%";
      document.getElementById('second-slide').style.left = "100%";
      document.getElementById('third-slide').style.left = "200%";
  }

  toSecond = () => {    
      document.getElementById('poligon').style.marginLeft = 335 + 'px';
      document.getElementById('shape-active').style.width = 290 + 'px';
      document.getElementById('first-slide').style.left = "-100%";
      document.getElementById('second-slide').style.left = "0%";
      document.getElementById('third-slide').style.left = "100%";
  }

  toThird = () => {
      document.getElementById('poligon').style.marginLeft = 610 + 'px';
      document.getElementById('shape-active').style.width = 580 + 'px';
      document.getElementById('first-slide').style.left = "-200%";
      document.getElementById('second-slide').style.left = "-100%";
      document.getElementById('third-slide').style.left = "0%";
  }


  onScroll = () => {
    if (window.pageYOffset >= 789) {
      this.setState({ firstNav: this.state.defaultNav, secondNav: this.state.defaultNav, thirdNav: this.state.selectedNav });
      this.scrollTo(document.documentElement, 1536, 400);
    } else if (window.pageYOffset >= 320) {
      this.setState({ firstNav: this.state.defaultNav, secondNav: this.state.selectedNav, thirdNav: this.state.defaultNav });
      this.scrollTo(document.documentElement, 768, 400);
    } else {
      this.setState({ firstNav: this.state.selectedNav, secondNav: this.state.defaultNav, thirdNav: this.state.defaultNav });
      this.scrollTo(document.documentElement, 0, 400);
    }
  }



  goToFirstBlock = () => {
    this.scrollTo(document.documentElement, 0, 400);

  }

  goToSecondBlock = () => {
    this.scrollTo(document.documentElement, 768, 400);
  }

  goToThirdBlock = () => {
    this.scrollTo(document.documentElement, 1536, 400);
  }


  render() {

    return (
      <div className="App" id="body" style={appStyle}>
        <div className="navigation">
          <div className="nav-1" style={{ backgroundColor: this.state.firstNav }} onClick={this.goToFirstBlock}></div>
          <div className="nav-2" style={{ backgroundColor: this.state.secondNav }} onClick={this.goToSecondBlock}></div>
          <div className="nav-3" style={{ backgroundColor: this.state.thirdNav }} onClick={this.goToThirdBlock}></div>
        </div>
        <div className="section-1">
          <p className="header">Всегда ли цели терапии СД2 на поверхности?</p>
          <div className="ellipse-1-1">
            <div className="ellipse-1-2">
              <div className="ellipse-1-3">
              </div>
            </div>
          </div>
          <p className="target-1"> Цель по HbA1c</p>
          <p className="target-2"> Гипогликемия </p>
          <div className="ellipse-2-1">
            <div className="ellipse-2-2">
              <div className="ellipse-2-3">
              </div>
            </div>
          </div>
          <p className="target-3"> СС риски </p>
          <div className="ellipse-3-1">
            <div className="ellipse-3-2">
              <div className="ellipse-3-3">
              </div>
            </div>
          </div>
          <p className="target-4"> Осложнения СД </p>
          <div className="ellipse-4-1">
            <div className="ellipse-4-2">
              <div className="ellipse-4-3">
              </div>
            </div>
          </div>
          <div className="to-bottom" onClick={this.goToThirdBlock}>
            <p className="to-bottom-text"> Листайте вниз </p>
            <img className="arrow-to-bot" src={arrow} />
            <span><img className="ice1" src={ice1} /></span>
            <span><img className="ice2" src={ice2} /></span>
            <span><img className="ice3" src={ice3} /></span>
            <span><img className="ice4" src={ice4} /></span>
          </div>
        </div>
        <div className="section-2">
          <p className="header">Основа терапии &#8211; патогенез СД2</p>
        </div>
        <div className="section-3">
        <ul id="slider">
          <li className="slide" id="first-slide">
          <div>
          <p className="header"> Звенья патогенеза СД2 </p>
          <img className="card card1" src={card1} />
          <img className="deep-ice ice111" src={ice11} />
          <img className="deep-ice ice121" src={ice12} />
          <img className="deep-ice ice131" src={ice13} />
          </div>
          </li>
          <li className="slide" id="second-slide">
          <p className="header"> Смертельный октет </p>
          <img className="card card2" src={card2} />
          <img className="deep-ice ice112" src={ice11} />
          <img className="deep-ice ice122" src={ice12} />
          <img className="deep-ice ice132" src={ice13} />
          </li>
          <li className="slide active" id="third-slide">
          <p className="header"> Звенья патогенеза СД2 </p>
          <img className="card card3" src={card3} />
          <img className="deep-ice ice113" src={ice11} />
          <img className="deep-ice ice123" src={ice12} />
          <img className="deep-ice ice133" src={ice13} />
          </li>
          </ul>
          <div className="slider-nav">
            <img className="shape" src={shape} />
            <img className="shape-active" id="shape-active" src={shapeActive} />
            <img id="poligon" className="poligon3" src={poligon} onMouseDown={this.mouseMove} onTouchStart={this.touchMove} />
          </div>
          <div className="years">
            <span className="year first" onClick={this.toFirst}>1998</span>
            <span className="year second" onClick={this.toSecond}>2009</span>
            <span className="year third" onClick={this.toThird}>2016</span>
          </div>
        </div>

      </div>
    );
  } 
}

export default App;
