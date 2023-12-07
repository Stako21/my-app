import './Header.scss'

export const Header = () => (
  <header>
    <button>Reset</button>
    <div className='button'>
      Sort by:
      <button>id</button>
      <button>name</button>
      <button>color</button>
    </div>
  </header>
)