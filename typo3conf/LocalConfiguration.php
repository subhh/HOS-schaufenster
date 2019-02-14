<?php
return [
    'BE' => [
        'debug' => false,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$pbkdf2-sha256$25000$8gM.jhyhb6sEcX.6Vtidvg$Bs89gZkUq.NzkIOhqW6ppTDC.6GRX/p4MS5hczBMspg',
        'loginSecurityLevel' => 'rsa',
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'charset' => 'utf8',
                'dbname' => 'typo3',
                'driver' => 'mysqli',
                'host' => '127.0.0.1',
                'password' => 'DammtorRiss42838',
                'port' => 3306,
                'user' => 'typo3',
            ],
        ],
    ],
    'EXT' => [
        'extConf' => [
            'beuser' => 'a:0:{}',
            'context_help' => 'a:0:{}',
            'extension_builder' => 'a:3:{s:15:"enableRoundtrip";s:1:"1";s:15:"backupExtension";s:1:"1";s:9:"backupDir";s:35:"uploads/tx_extensionbuilder/backups";}',
            'feedit' => 'a:0:{}',
            'func' => 'a:0:{}',
            'hos-find-facetviews' => 'a:0:{}',
            'hos-t3find-facet-heatmap' => 'a:0:{}',
            'hos-t3find-facetviews' => 'a:0:{}',
            'hosfindfacetviews' => 'a:0:{}',
            'info_pagetsconfig' => 'a:0:{}',
            'opendocs' => 'a:0:{}',
            'realurl' => 'a:6:{s:10:"configFile";s:26:"typo3conf/realurl_conf.php";s:14:"enableAutoConf";s:1:"1";s:14:"autoConfFormat";s:1:"0";s:17:"segTitleFieldList";s:0:"";s:12:"enableDevLog";s:1:"0";s:10:"moduleIcon";s:1:"0";}',
            'rsaauth' => 'a:1:{s:18:"temporaryDirectory";s:0:"";}',
            'saltedpasswords' => 'a:2:{s:3:"BE.";a:4:{s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\Pbkdf2Salt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}s:3:"FE.";a:5:{s:7:"enabled";i:1;s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\Pbkdf2Salt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}}',
            'scriptmerger' => 'a:0:{}',
            'setup' => 'a:0:{}',
            'sys_action' => 'a:0:{}',
            'vhs' => 'a:1:{s:20:"disableAssetHandling";s:1:"0";}',
            'viewpage' => 'a:0:{}',
            'workspaces' => 'a:0:{}',
        ],
    ],
    'EXTCONF' => [
        'lang' => [
            'availableLanguages' => [
                'fr',
                'de',
                'he',
                'ru',
            ],
        ],
    ],
    'FE' => [
        'debug' => false,
        'loginSecurityLevel' => 'rsa',
    ],
    'GFX' => [
        'jpg_quality' => '80',
        'processor' => 'ImageMagick',
        'processor_allowTemporaryMasksAsPng' => false,
        'processor_colorspace' => 'sRGB',
        'processor_effects' => 1,
        'processor_enabled' => true,
        'processor_path' => '/usr/bin/',
        'processor_path_lzw' => '/usr/bin/',
    ],
    'MAIL' => [
        'transport' => 'sendmail',
        'transport_sendmail_command' => '/usr/sbin/sendmail -t -i ',
        'transport_smtp_encrypt' => '',
        'transport_smtp_password' => '',
        'transport_smtp_server' => '',
        'transport_smtp_username' => '',
    ],
    'SYS' => [
        'caching' => [
            'cacheConfigurations' => [
                'extbase_object' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\ApcuBackend',
                    'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\VariableFrontend',
                    'groups' => [
                        'system',
                    ],
                    'options' => [
                        'defaultLifetime' => 0,
                    ],
                ],
            ],
        ],
        'devIPmask' => '',
        'displayErrors' => 0,
        'enableDeprecationLog' => false,
        'encryptionKey' => '60a10d621cd3f55854fedea6ea40d05c7999518dff05bb1551c75fa895f872bdbde9850b0e3e398280ec7153795cf00f',
        'exceptionalErrors' => 20480,
        'isInitialDatabaseImportDone' => true,
        'isInitialInstallationInProgress' => false,
        'sitename' => 'HOS Discovery',
        'sqlDebug' => 0,
        'systemLog' => 'error_log',
        'systemLogLevel' => 2,
    ],
];
