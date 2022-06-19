const Squeeze = () => {
  return (
    <div className="wrapper">
      <div className="squeeze_wrapper">
        <div className="squeeze_header">
          <h2 id="main_title">Business Loan</h2>
          <p id="header_desc">Apply for a Business loan in 5 minutes!</p>
        </div>
        <div className="squeeze_form">
          <div className="admin_login_text">
            <button id="admin_button" type="submit">Admin</button>
            <p style={{ "fontSize": "13px", "fontWeight": 900 }}>
              Click to login as admin
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Squeeze;