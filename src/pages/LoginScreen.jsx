import React from 'react'

const LoginScreen = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <form className='col s12'>
        <div className="row">
          <div className="input-field col s12">
            <i class="material-icons prefix">mail</i>
            <input id="disabled" type="text" className="validate" />
            <label for="disabled">Email</label>
          </div>
          <br />
          <div className="input-field col s12">
            <i class="material-icons prefix">key</i>
            <input id="password" type="text" className="validate" />
            <label for="password">Contraseña</label>
          </div>
          <button class="btn blue waves-effect waves-light" type="submit" name="action">Enviar
            <i class="material-icons right">send</i>
          </button>

        </div>
      </form>
    </div>

  )
}

export default LoginScreen