<?php
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

require_once(dirname(__FILE__) . '/../../lib/parapara.inc');
require_once('simpletest/autorun.php');

// These tests, in combination can take more than the standard 30 seconds
set_time_limit(0);

// Also, cancelling part way through can leave test files etc. lying around
ignore_user_abort(true);

class APITestSuite extends TestSuite {
  function APITestSuite() {
    parent::__construct();
    $this->TestSuite('API tests');
    $this->addFile(dirname(__FILE__) . '/TestGetDesigns.php');
    $this->addFile(dirname(__FILE__) . '/TestCreateWall.php');
    $this->addFile(dirname(__FILE__) . '/TestGetWalls.php');
    $this->addFile(dirname(__FILE__) . '/TestGetWall.php');
    $this->addFile(dirname(__FILE__) . '/TestSetWall.php');
    $this->addFile(dirname(__FILE__) . '/TestDeleteWall.php');
    $this->addFile(dirname(__FILE__) . '/TestSessions.php');
    $this->addFile(dirname(__FILE__) . '/TestCharactersAPI.php');
    $this->addFile(dirname(__FILE__) . '/TestEmailAPI.php');
    $this->addFile(dirname(__FILE__) . '/TestWallStream.php');
  }
}
?>
