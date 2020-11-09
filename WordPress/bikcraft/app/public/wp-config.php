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
define('AUTH_KEY',         '6SX+JO1dkwKClvklhXShxvUhdmM79sUTpYGPWX0NAeop5oRPrBx3yVdHJRKB0jJ4jYsdaU4CODbyvy9wzfHxfQ==');
define('SECURE_AUTH_KEY',  '3OyqC7YJhilqB3V02Sm6/y3rFtViWycSdcugvkMedQElebS/LI8pAqQQsv3B7BcWPH89cfEalYiS9KPdcZBU1A==');
define('LOGGED_IN_KEY',    'ahYnM6y4YIDxdhhZqRXox/u9aozXpDz4xiJoqGFNQiX5KzrCetPovDFW2KB7/iWY1WtB8B45IJrjlYv1FZ62wg==');
define('NONCE_KEY',        'oAROoRU+WdHOSflWz4PMJscucATncb/h4A8JEe8SOwJ380gJPWqBOPaqRuFrqHB4Oy2PDxmDYRLS+uMqJac2nw==');
define('AUTH_SALT',        'zWOckmEGg1USEltFK8wEm1/wty4zV1zM8V8Z0xQYVA146riuzellM9Pz+3tEU8gQzwdbu1D+0keTddyx4HrChw==');
define('SECURE_AUTH_SALT', 'WgnDP9nLWmK+V7KynY2Mqo6LHd2usm7mtxM+CrWLklOJXXDRaZwOZM/+yycYf36RvbF7btjJ22AScM+Ih8ULsw==');
define('LOGGED_IN_SALT',   'pvTnSetm/C1FYOQKE3OBXR8pT56UTzsKuzij43239gha7wplPSZQFRgSI+pCO6rkGnpU4YbdAHnGrRCHDAZBcg==');
define('NONCE_SALT',       'VI++t4XWGaR0+eoSi3WBWog17a9wzwa0x5yudhrTDvzzmn6unIMB2SfnGD9e644UmmnUKsxkJwsLV8asICLf5Q==');

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
