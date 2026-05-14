<?php
/**
 * Hello Elementor Child — functions.php
 * Israeli nonprofit charity website
 */

// ─── Enqueue styles & fonts ───────────────────────────────────────────────
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_uri(), [ 'parent-style' ], '1.0.0' );

	// Heebo — Hebrew-optimised Google Font (self-host if CDN is blocked)
	wp_enqueue_style(
		'google-fonts-heebo',
		'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap',
		[],
		null
	);

	// Child theme scripts
	wp_enqueue_script(
		'header-scroll',
		get_stylesheet_directory_uri() . '/js/header-scroll.js',
		[],
		'1.0.0',
		true
	);
	wp_enqueue_script(
		'donation-selector',
		get_stylesheet_directory_uri() . '/js/donation-selector.js',
		[],
		'1.0.0',
		true
	);
} );

// ─── RTL: load rtl.css automatically when locale is Hebrew ───────────────
add_action( 'wp_enqueue_scripts', function () {
	if ( is_rtl() ) {
		wp_enqueue_style(
			'child-rtl',
			get_stylesheet_directory_uri() . '/rtl.css',
			[ 'child-style' ],
			'1.0.0'
		);
	}
} );

// ─── Theme supports ───────────────────────────────────────────────────────
add_action( 'after_setup_theme', function () {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
	add_theme_support( 'custom-logo', [
		'width'       => 200,
		'height'      => 80,
		'flex-width'  => true,
		'flex-height' => true,
	] );
} );

// ─── Navigation menus ─────────────────────────────────────────────────────
add_action( 'after_setup_theme', function () {
	register_nav_menus( [
		'primary' => 'תפריט ראשי',
		'footer'  => 'תפריט פוטר',
	] );
} );

// ─── Contact Form 7 — disable auto-paragraph (prevents broken markup) ────
add_filter( 'wpcf7_autop_or_not', '__return_false' );

// ─── Flamingo: tag every CF7 submission with the form name ───────────────
add_filter( 'wpcf7_flamingo_inbound_message_props', function ( $props ) {
	return $props; // extend here if custom field mapping is needed
} );

// ─── Disable XML-RPC (security hardening) ────────────────────────────────
add_filter( 'xmlrpc_enabled', '__return_false' );

// ─── Remove WordPress version from head (security hardening) ─────────────
remove_action( 'wp_head', 'wp_generator' );

// ─── Helper: output the donate button URL from options ───────────────────
function charity_donate_url(): string {
	return esc_url( get_option( 'charity_donate_url', '#' ) );
}

// ─── Admin: add settings page for client-editable variables ──────────────
add_action( 'admin_menu', function () {
	add_options_page(
		'הגדרות אתר',
		'הגדרות אתר',
		'manage_options',
		'charity-settings',
		'charity_settings_page'
	);
} );

add_action( 'admin_init', function () {
	register_setting( 'charity_settings_group', 'charity_donate_url' );
	register_setting( 'charity_settings_group', 'charity_phone' );
	register_setting( 'charity_settings_group', 'charity_whatsapp' );
	register_setting( 'charity_settings_group', 'charity_email' );
	register_setting( 'charity_settings_group', 'charity_address' );
	register_setting( 'charity_settings_group', 'charity_facebook_url' );
	register_setting( 'charity_settings_group', 'charity_instagram_url' );
	register_setting( 'charity_settings_group', 'charity_youtube_url' );
} );

function charity_settings_page(): void {
	?>
	<div class="wrap" dir="rtl">
		<h1>הגדרות אתר</h1>
		<form method="post" action="options.php">
			<?php settings_fields( 'charity_settings_group' ); ?>
			<table class="form-table">
				<tr><th>קישור עמוד תרומות</th><td><input type="url" name="charity_donate_url" value="<?php echo esc_attr( get_option( 'charity_donate_url' ) ); ?>" class="regular-text" placeholder="https://matara.pro/nedarimpl/XXXXX"></td></tr>
				<tr><th>טלפון</th><td><input type="text" name="charity_phone" value="<?php echo esc_attr( get_option( 'charity_phone' ) ); ?>" class="regular-text" placeholder="REPLACE_PHONE"></td></tr>
				<tr><th>WhatsApp (בינלאומי)</th><td><input type="text" name="charity_whatsapp" value="<?php echo esc_attr( get_option( 'charity_whatsapp' ) ); ?>" class="regular-text" placeholder="972500000000"></td></tr>
				<tr><th>אימייל</th><td><input type="email" name="charity_email" value="<?php echo esc_attr( get_option( 'charity_email' ) ); ?>" class="regular-text" placeholder="REPLACE_EMAIL"></td></tr>
				<tr><th>כתובת</th><td><input type="text" name="charity_address" value="<?php echo esc_attr( get_option( 'charity_address' ) ); ?>" class="regular-text" placeholder="REPLACE_ADDRESS"></td></tr>
				<tr><th>פייסבוק URL</th><td><input type="url" name="charity_facebook_url" value="<?php echo esc_attr( get_option( 'charity_facebook_url' ) ); ?>" class="regular-text"></td></tr>
				<tr><th>אינסטגרם URL</th><td><input type="url" name="charity_instagram_url" value="<?php echo esc_attr( get_option( 'charity_instagram_url' ) ); ?>" class="regular-text"></td></tr>
				<tr><th>יוטיוב URL</th><td><input type="url" name="charity_youtube_url" value="<?php echo esc_attr( get_option( 'charity_youtube_url' ) ); ?>" class="regular-text"></td></tr>
			</table>
			<?php submit_button( 'שמירה' ); ?>
		</form>
	</div>
	<?php
}
