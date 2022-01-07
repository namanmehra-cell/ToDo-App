


export default function Header(props) {
    return (
        <nav class={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div class="container-fluid">
    <a class="navbar-brand" href="/">Todo List </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.click}  type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.title}</label>
</div>
  </div>
</nav>

    );
  }