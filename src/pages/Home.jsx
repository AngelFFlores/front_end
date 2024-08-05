export const Home = () => {
  return (
    <div className="row mt-3">
      <div className="col-12 col-sm-3">
        <div className="card shadow-sm h-100 py-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col mr-2">
                <div className="text-primary text-uppercase mb-1">
                    <small>Ordenes pendientes</small>
                </div>
                <div className="">200</div>
              </div>
              <div className="col-auto">
                <i className="bi bi-clipboard-fill fs-2 text-black-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-3">
        <div className="card shadow-sm h-100 py-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col mr-2">
                <div className="text-success text-uppercase mb-1">
                    <small>Clientes nuevos</small>
                </div>
                <div className="">20</div>
              </div>
              <div className="col-auto">
                <i className="bi bi-people-fill fs-2 text-black-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}