import React from 'react';
import './bootstrap.min.css';

function Reported_case_search() {
  return (
    <>
      <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <input className="form-control mr-sm-2" type="text" placeholder="search id" aria-label="Search" />
        <button className="btn aqua-gradient btn-rounded btn-sm my-0" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export function ReportedCase() {
  return (
    <div className="row">
      <div className="col-5">
        <div className="card ">
          <div className="card-header">
            <b>Case status</b>
          </div>
          <div className="card-body">
            <form>
              <div class="form-group row">
                <label for="id" class="col-sm-3 col-form-label">
                  Id
                </label>
                <div class="col-sm-9">
                  <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="1" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">
                  Urgency
                </label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="urgency" placeholder="urgency" />
                </div>
              </div>
              <div class="form-group row">
                <label for="status" class="col-sm-3 col-form-label">
                  status
                </label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="status" placeholder="status" />
                </div>
              </div>
              <div class="form-group row">
                <label for="reporter" class="col-sm-3 col-form-label">
                  Reporter
                </label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="reporter" placeholder="reporter" />
                </div>
              </div>
              <div class="form-group row">
                <label for="hospital" class="col-sm-3 col-form-label">
                  Hospital
                </label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hospital" placeholder="hospital" />
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col">
                <a href="home" className="btn btn-primary">
                  Edit
                </a>
              </div>
              <div className="col">
                <a href="table" className="btn btn-primary">
                  View all
                </a>
              </div>
              <div className="col">
                <a href="home" className="btn btn-primary">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7">
      <table class="table table-bordered">
  <thead>
  <tr>
      <th scope="col" colspan='5'>Recorded cases</th>

    </tr>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Urgency</th>
      <th scope="col">status</th>
      <th scope="col">Reporter</th>
      <th scope="col">Hospital</th>

    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">1</th>
      <td>Immediate</td>
      <td>innactive</td>
      <td>Angela</td>
      <td>Namirembe</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Immediate</td>
      <td>active</td>
      <td>Kessy</td>
      <td>Mulago</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  );
}

export default Reported_case_search;
