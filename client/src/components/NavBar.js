import React, { useContext } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../context/user';
import { MovieContext } from '../context/movie'
import { ActorContext } from '../context/actor'
import { useLocation } from 'react-router-dom'
import SearchMovies from './SearchMovies'
import SearchActors from './SearchActors'


export default function NavBar() {
    const location = useLocation()
    const navigate = useNavigate()
    const { user, isAuthenticated, logout} = useContext( UserContext );
    const { showSearchActors, setSearchActorsOnChange } = useContext( ActorContext )
    const { setTriggerRandomTrailer, showSearchMovieInput, setSearchMovieOnChange } = useContext( MovieContext )

    const logoutUser = () => {
        fetch('/logout', {
          method: 'DELETE',
          headers: {'Content-Type' : 'application/json'}
        })
        .then(() => {
          logout();
          navigate('/');
        });
      };



    if( isAuthenticated ) {
        if( location.pathname === '/' ){
            return (
                <div className='navBarParentDiv'>
                    <img src={ user.image } alt='user_avatar' />

                    <NavLink to='/'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={ () => setTriggerRandomTrailer((trigger) => !trigger) }
                    >
                        <h4> HOME </h4>
                    </NavLink>

                    <NavLink to='/action_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30,
                            })}
                    >
                        <h4> ACTION </h4>
                    </NavLink>

                    <NavLink to='/comedy_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30,
                            })}
                    >
                        <h4> COMEDY </h4>
                    </NavLink>

                    <NavLink to='/romance_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30,
                            })}
                    >
                        <h4> ROMANCE </h4>
                    </NavLink>

                    <NavLink to='/drama_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30,
                            })}
                    >
                        <h4> DRAMA </h4>
                    </NavLink>

                    <NavLink to='/thriller_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30,
                            })}
                    >
                        <h4> THRILLER </h4>
                    </NavLink>

                    <NavLink to='/adventure_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30,
                            })}
                    >
                        <h4> ADVENTURE </h4>
                    </NavLink>

                    <NavLink to='/crime_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> CRIME </h4>
                    </NavLink>

                    <NavLink to='/horror_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> HORROR </h4>
                    </NavLink>

                    <NavLink to='/actors_page'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> ACTORS </h4>
                    </NavLink>

                    <div className='navSettings'>
                        <Link className='settingIconLink' to='/user_profile'>
                            <h1>⚙️</h1>
                        </Link>
                        <div className='navSettingsLogoutDiv'>
                            <NavLink to='/'>
                                <button onClick={ logoutUser }> <b> <h4> Logout </h4> </b> </button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            )
        } else if (
            location.pathname === '/action_movies'
            || location.pathname === '/comedy_movies'
            || location.pathname === '/romance_movies'
            || location.pathname === '/drama_movies'
            || location.pathname === '/thriller_movies'
            || location.pathname === '/adventure_movies'
            || location.pathname === '/crime_movies'
            || location.pathname === '/horror_movies'
            ) {
            return (
                <div className='navBarParentDiv'>
                    <img src={ user.image } alt='user_avatar' />

                    <NavLink to='/'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? null : 30,
                            })}

                            onClick={ () => {
                                setTriggerRandomTrailer((trigger) => !trigger)
                                setSearchMovieOnChange('')
                            } }
                    >
                        <h4> HOME </h4>
                    </NavLink>

                    <NavLink to='/action_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> ACTION </h4>
                    </NavLink>


                    <NavLink to='/comedy_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> COMEDY </h4>
                    </NavLink>

                    <NavLink to='/romance_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> ROMANCE </h4>
                    </NavLink>

                    <NavLink to='/drama_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> DRAMA </h4>
                    </NavLink>

                    <NavLink to='/thriller_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> THRILLER </h4>
                    </NavLink>

                    <NavLink to='/adventure_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> ADVENTURE </h4>
                    </NavLink>

                    <NavLink to='/crime_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> CRIME </h4>
                    </NavLink>

                    <NavLink to='/horror_movies'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}

                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> HORROR </h4>
                    </NavLink>

                    <NavLink to='/actors_page'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30,
                            })}
                            onClick={() => setSearchMovieOnChange('')}
                    >
                        <h4> ACTORS </h4>
                    </NavLink>

                    { showSearchMovieInput ?
                        <div className='searchBarParentDiv'>
                            <SearchMovies/>
                        </div>
                      :
                        null
                    }
                </div>
            )
        } else if( location.pathname === '/actors_page'){
            return (
                <div className='navBarParentDiv'>
                      <img src={ user.image } alt='user_avatar' />

                    <NavLink to='/'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => {
                                setTriggerRandomTrailer((trigger) => !trigger)
                                setSearchActorsOnChange('')
                            }}
                    >
                        <h4> HOME </h4>
                    </NavLink>

                    <NavLink to='/action_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> ACTION </h4>
                    </NavLink>

                    <NavLink to='/comedy_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> COMEDY </h4>
                    </NavLink>

                    <NavLink to='/romance_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> ROMANCE </h4>
                    </NavLink>

                    <NavLink to='/drama_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> DRAMA </h4>
                    </NavLink>

                    <NavLink to='/thriller_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> THRILLER </h4>
                    </NavLink>

                    <NavLink to='/adventure_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> ADVENTURE </h4>
                    </NavLink>

                    <NavLink to='/crime_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> CRIME </h4>
                    </NavLink>

                    <NavLink to='/horror_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> HORROR </h4>
                    </NavLink>

                    <NavLink to='/actors_page'
                        style={({ isActive }) => ({
                            color: isActive ? '#ff0000' : '#fff',
                            background: isActive ? '#0000' : '#0000',
                            textDecoration: isActive ? 'none' : 'none',
                            marginTop: isActive ? 30 : 30 ,
                            })}

                            onClick={ () => setSearchActorsOnChange('') }
                    >
                        <h4> ACTORS </h4>
                    </NavLink>

                    { showSearchActors ?
                        <div className='searchBarParentDiv'>
                            <SearchActors/>
                        </div>
                      :
                        null
                    }
                </div>
            )
        } else {
            return (
                <div className='navBarParentDiv'>
                      <img src={ user.image } alt='user_avatar' />

                    <NavLink to='/'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}

                            onClick={ () => setTriggerRandomTrailer((trigger) => !trigger)}
                    >
                        <h4> HOME </h4>
                    </NavLink>

                    <NavLink to='/action_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> ACTION </h4>
                    </NavLink>

                    <NavLink to='/comedy_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> COMEDY </h4>
                    </NavLink>

                    <NavLink to='/romance_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> ROMANCE </h4>
                    </NavLink>

                    <NavLink to='/drama_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> DRAMA </h4>
                    </NavLink>

                    <NavLink to='/thriller_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> THRILLER </h4>
                    </NavLink>

                    <NavLink to='/adventure_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> ADVENTURE </h4>
                    </NavLink>

                    <NavLink to='/crime_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> CRIME </h4>
                    </NavLink>

                    <NavLink to='/horror_movies'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> HORROR </h4>
                    </NavLink>

                    <NavLink to='/actors_page'
                        style={({ isActive }) => ({
                            color: isActive ? null : '#fff',
                            textDecoration: isActive ? null : 'none',
                            marginTop: isActive ? null : 30 ,
                            })}
                    >
                        <h4> ACTORS </h4>
                    </NavLink>

                    <div className='navSettings'>
                        <Link className='settingIconLink' to='/user_profile'>
                            <h1>⚙️</h1>
                        </Link>
                        <div className='navSettingsLogoutDiv'>
                            <NavLink to='/'>
                                <button onClick={ logoutUser }> <b> <h4> Logout </h4> </b> </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
