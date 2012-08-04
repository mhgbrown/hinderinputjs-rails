# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "hinderinputjs-rails/version"

Gem::Specification.new do |s|
  s.name        = "hinderinputjs-rails"
  s.version     = Hinderinputjs::Rails::VERSION
  s.authors     = ["Morgan Brown"]
  s.email       = ["brown.mhg@gmail.com"]
  s.homepage    = "https://github.com/discom4rt/hinderinputjs-rails"
  s.summary     = "A method for hindering input capabilities within a textarea or text input."
  s.description = "A method for hindering input capabilities within a textarea or text input. Attempts to disallow text selection, cursor placement, and characters outside of the \"normal\" ASCII print character range."

  s.files         = `git ls-files`.split("\n")

  s.add_dependency "railties", "~> 3.1"
end

