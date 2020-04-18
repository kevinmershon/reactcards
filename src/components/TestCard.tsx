import React, {Component} from 'react'
import Card from './Card'

const testBoxStyle = {
   padding:'12px',
   borderTop:'1px solid white',
}

interface IIconState {
  color: string;
  size: number;
}
const CheckIcon = (props:IIconState) => (
  <svg fill={props.color} height={props.size} viewBox="0 0 24 24" width={props.size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
)

const CloseIcon = (props:IIconState) => (
  <svg fill={props.color} height={props.size} viewBox="0 0 24 24" width={props.size}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
)

const iconSize = 20

interface IHeaderProps {
  icon: object;
  children: object;
  error: string;
}
const TestHeader = (props:IHeaderProps) => (
  <div>
    <div style={{float:'left', marginTop:-2}}>{props.icon}</div>
    <span style={{paddingLeft:'12px'}}>{props.children}</span>
  </div>
)

const TestSuccess = (props:IHeaderProps) => (
  <div className='react-card-test-successful' style={{...testBoxStyle, backgroundColor:'#DCEED3'}}>
    <TestHeader icon={<CheckIcon color="green" size={iconSize}/>}>
      <span style={{color:'darkgreen'}}>{props.children}</span>
    </TestHeader>
  </div>
)

const TestFailure = (props:IHeaderProps) => (
  <div className='react-card-test-failure' style={{...testBoxStyle, backgroundColor:'#EEDBDA'}}>
    <TestHeader icon={<CloseIcon color="red" size={iconSize}/>}>
      <span style={{color:'darkred'}}>{props.children}</span>
    </TestHeader>
    <div style={{fontFamily:'monospace',marginTop:'12px',marginLeft:'32px'}}>
      {props.error.toString()}
    </div>
  </div>
)

export default class TestCard extends Component {
  constructor(props) {
    super(props)
    this.state = {results: []}
  }
  componentWillReceiveProps(nextProps) {
    //TODO
    this.runTests(nextProps.testModule)
  }
  componentDidMount() {
    //TODO
    this.runTests(this.props.testModule)
  }
  runTests(testModule) {
    const self = this
    const results = []
    const tests = Object.keys(testModule)
    setTimeout(function() {
      tests.forEach(name => {
        try {
          testModule[name]()
          results.push([true, name])
        } catch(e) {
          results.push([e, name])
        }
      })
      self.setState({results})
    }, 0)
  }
  render() {
    const {title, doc} = this.props
    return (
      <Card {...{title, doc}}>
      {this.state.results.map(([result, name], index) => (
        result === true
          ? <TestSuccess key={index}>{name}</TestSuccess>
          : <TestFailure key={index} error={result}>{name}</TestFailure>
        )
      )}
      </Card>
    )
  }
}
