import { sharedStyles } from './shared-styles.js';
import {LitElement, html, css} from 'lit';


function getJson(url) {
  return new Promise((resolve, reject) => {
    function reqListener () {
      resolve(JSON.parse(this.responseText))
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
  })
}

class HomeComponent extends LitElement {

  static get styles() {
    return [
      sharedStyles,
      css`
        li {
          font-size: 50px !important;
          margin: 0px 30px;
        }
		ul {
		  text-align: center;
		}
		span {
			text-align: center;
			font-size: xxx-large;
			width: 90vw;
			display: inline-block;
			height: 10vh;
		}
      `
    ];
  }

  constructor() {
    super()
    this.forms = []
  }

  static get properties() {
    return { 
      forms: { type: Array }
    };
  }

  async connectedCallback() {
    super.connectedCallback()
    this.forms = (await getJson('./assets/forms.json'))
 	      .filter(form => (typeof form.archived == 'undefined' || form.archived == false) && (typeof form.listed == 'undefined' || form.listed == true) )
 
  }

  render() {
    return html`
	  <h2  style="
	      position: absolute;
	      top: 10vw;
	  "><a class="btn" href="#/case-details">Resume</a>
    
	  </h2>
	  <p><span>Choose a Game</span>
      <ul>
        ${this.forms.map(form => html`
			
          <li class="btn" @click=${() => this.open(form.id)}>${form.title}</li>
        `)}
      </ul>
		</p>
    `
  }

  open(formId) {
    window.location.hash = `#/tangy-forms/new/${formId}`
  }

}

customElements.define('home-component', HomeComponent)
