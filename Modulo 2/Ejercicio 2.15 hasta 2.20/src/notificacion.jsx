export const NotificacionSuccess = ({message}) => {

	if(message===''){
		return null
	}

	return(
		<div className="success">
      {message}
    </div>
	)
}

export const NotificacionError = ({message}) => {

	if(message===''){
		return null
	}

	return(
		<div className="error">
      {message}
    </div>
	)
}