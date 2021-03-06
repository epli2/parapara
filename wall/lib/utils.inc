<?php
/* vim: set syn=php: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Wide trim
// Performs trim on a string but also strips full-width whitespace
function wtrim($str) {
  return preg_replace('/^[\pZ\pC]+|[\pZ\pC]+$/u', '', $str);
}

// Convert something that should be numerical to an integer whilst preserving
// null values
function toIntOrNull(&$intLike) {
  return !isset($intLike) ? null : intval($intLike);
}

function trimTrailingSlash($path) {
  $path = rtrim($path);
  $lastChar = substr($path, -1);
  if ($lastChar == '/' || $lastChar == '\\') {
    $path = substr($path, 0, -1);
  }
  return $path;
}

?>
