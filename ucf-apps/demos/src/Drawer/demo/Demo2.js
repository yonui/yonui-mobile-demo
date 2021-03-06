import { Drawer, List, NavBar, Icon } from 'tinper-libraui';
import './demo.less'
class App extends React.Component {
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    const sidebar = (<List>
      {[0, 1, 2, 3].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (<div style={{ height: '100%' }}>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('docked')}>
        Docked in document
      </NavBar>
      <div className='drawer-wrapper'>
        <Drawer
          className="my-drawer"
          // style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebarStyle={{ border: '1px solid #ddd' }}
          sidebar={sidebar}
          docked={this.state.docked}
        >
          Click upper-left corner
        </Drawer>
      </div>
    </div>);
  }
}

export default App;

//@title 嵌入文档模式
//@description 嵌入到文档流中