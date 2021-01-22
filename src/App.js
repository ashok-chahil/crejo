import logo from './logo.svg';
import './App.css';
// import { Card, CardTitle, CardText} from 'bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
        <div className="App-header">
            <h1 className="header">Credit Card input!</h1>
            <p style={{color:"#a2a2a2"}}>Credit Card Form.</p>
            <div>
                <Card className="common-card-design" style={{backgroundColor:"gray", borderRadius: "15px" }}>
                    <CardContent className="card-content">
                        <div className="row card-number">
                           **** **** **** **** 
                        </div>
                    </CardContent>
                    <div className="d-flex" style={{marginTop:"2px"}}>
                        <div className="col-md-6 nameText">
                            Your Name Here
                        </div>
                        <div className="col-md-6" style={{color:"#a2a2a2"}}>
                            <div className="Validtext">Valid Through</div>
                            <div className="Validtext">MM/YY</div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="row">
                <div className="col-md-12"> 
                    <TextField
                        id="outlined-number-input"
                        label="Card Number"
                        type="number"
                        autoComplete="current-number"
                        variant="outlined"
                        style={{width:"435px"}}
                    />
                </div>
                <div className="col-md-12" style={{marginTop:"10px"}}>
                    <TextField
                        id="outlined-name-input"
                        label="Name"
                        type="text"
                        autoComplete="current-name"
                        variant="outlined"
                        style={{width:"435px"}}
                    />
                </div>
                <div className="col-md-12" style={{marginTop:"10px"}}>
                    <span className="col-md-6" style={{width:"210px"}}>
                        <TextField
                            id="outlined-valid-input"
                            label="Valid Through"
                            type="text"
                            autoComplete="current-valid"
                            variant="outlined"
                            style={{width:"204px"}}
                        />
                    </span>
                    <span className="col-md-6">
                        <TextField
                            id="outlined-number-input"
                            label="CVV"
                            type="number"
                            autoComplete="current-number"
                            variant="outlined"
                            style={{width:"204px"}}
                        />
                    </span>
                </div>
                <div className="col-md-12" style={{marginTop:"10px"}}>
                    <Button variant="contained" color="primary" style={{width:"435px"}}>
                        PAY
                    </Button>
                </div>
            </div>
            
        </div>
        
               
    </div>
  );
}

export default App;
