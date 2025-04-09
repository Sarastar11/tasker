<?php

namespace OTGS\InstallerPlugin;

use function WPML\INSTALLER\FP\spreadArgs;

class OtgsInstallerPlugin {
    const REDIRECT_AFTER_ACTIVATION_OPTION = 'OTGS_INSTALER_PLUGIN_REDIRECT_AFTER_ACTIVATION';

    public function addHooks() { // Changed to instance method for consistency
        $this->addInstallerMenuItem();
        $this->addRedirectAfterActivation();
        $this->addDeactivationWhenInstallerInstancesDetected();
    }

    private function addInstallerMenuItem() {
        add_action('admin_menu', function () {
            add_menu_page(
                __('OTGS Installer', 'installer'),
                __('OTGS Installer', 'installer'),
                'manage_options',
                'plugin-install.php?tab=commercial',
                null
            );
        });
    }

    private function addDeactivationWhenInstallerInstancesDetected() {
        add_action('activated_plugin', function () {
            add_action('shutdown', [PluginDeactivator::class, 'deactivateIfRequired']); // Assuming static method
        });
    }

    private function addRedirectAfterActivation() {
        $addRedirection = function ($plugin) {
            if ($plugin == OTGS_INSTALLER_PLUGIN_BASENAME) {
                add_option(self::REDIRECT_AFTER_ACTIVATION_OPTION, true);
            }
        };

        $redirectToCommercialTab = function () {
            if (get_option(self::REDIRECT_AFTER_ACTIVATION_OPTION)) {
                delete_option(self::REDIRECT_AFTER_ACTIVATION_OPTION);
                wp_safe_redirect(network_admin_url('plugin-install.php?tab=commercial'));
                exit; // Ensure redirect completes
            }
        };

        add_action('activated_plugin', $addRedirection);
        add_action('admin_init', $redirectToCommercialTab);
    }
}

// Placeholder for PluginDeactivator (assumed to exist elsewhere)
class PluginDeactivator {
    public static function deactivateIfRequired() {
        // Logic to deactivate if multiple installer instances are detected
        // This is a placeholder; implement as needed
    }
}

// Define constants if not already defined in the main plugin file
if (!defined('OTGS_INSTALLER_PLUGIN_BASENAME')) {
    define('OTGS_INSTALLER_PLUGIN_BASENAME', plugin_basename(__FILE__));
}

// Initialize the plugin
$plugin = new OtgsInstallerPlugin();
$plugin->addHooks();
