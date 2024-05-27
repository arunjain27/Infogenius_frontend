export function Input(prop) {
    return (
      <label className="input-container">{prop.label}
        <input
          autoFocus={prop.autofocus}
          type={prop.type} 
          id={prop.id} 
          name={prop.name} 
          placeholder={prop.placeholder}
          className="input-style"/>
      </label>
    )
  }