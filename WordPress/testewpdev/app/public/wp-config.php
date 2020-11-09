<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sL2yUrXbJX0eByN/XAQ980DyJEmjfFrtJMsaTurSgGRV4th7+xNDWOSkv7yGl8rXxQ9rYFPDKVsTilJzeCR3Xw==');
define('SECURE_AUTH_KEY',  'twsq0yOZ/LikqTkC+zd+uf1ZdWO4jyg0mPO//2vR/uvkFgIHrWuEXJT/pFWID5tKD/30Z3+yK68VhsBXOMXZ1g==');
define('LOGGED_IN_KEY',    'lzbJxf2zz4+zwxMfAQOvFcWb1Zav/4rwukZKAEBkwE+XMn+LVFRBynyCmD1s7bo33s0KwIdAww97BMh91Dwz1A==');
define('NONCE_KEY',        'pO6cf+WGgUeCeUdgDA1ZnjShujbANTWjDJ6cBOz0BO+BhOVLsbgwb8IirhbBLhn1HauoG2r9D5rBoASHM4mCiQ==');
define('AUTH_SALT',        'pyndsnEMB28P0Anr751KOjWBTOAAZLLqMPY77Emw4VxVZ77Qh1Ao8ziYIsbLAQvONVokdlmi8b8ktHCd5ZM2Sg==');
define('SECURE_AUTH_SALT', 'KduLzgQUkshZUdhfz2l3RxMUlUdim/PjH/n5iZFM1kmqJqQiq/0snBU2igtMD2zCo/DUXauwFPLRCWN/BujfuQ==');
define('LOGGED_IN_SALT',   '6HK089N0J5u6WzZEVijbbKUkwnXyXtP2C1BXOc2JGjZHOQpWm4YoFGETl+WoqwMf4nyKI8cE06TVSg2WsTY4KA==');
define('NONCE_SALT',       '5zscQ6y6iT3MjM8w8EscrmKT5cpT3rRcuJCR3eiyuskXm1m4bVcjyfuDipy0o54aQqLOjmbQyaFrbwY0c5Tktw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
