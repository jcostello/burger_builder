import React from 'react'
import Logo from './../../UI/Logo/Logo'
import NavigationItems from './../../Navigation/NavigationItems/NavigationItems'
import Aux from './../../../hoc/Aux'
import BackDrop from './../../UI/Backdrop/Backdrop'
import styles from './SideDrawer.module.css'

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.clicked}/>
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer;