#!/bin/bash
#Versao1.0
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"
echo 'export PATH="$HOME/.linuxbrew/bin:$PATH"' >> $HOME/.bashrc
source $HOME/.bashrc
brew doctor

brew tap optimizers/cutest
brew install cutest --HEAD
brew install mastsif --HEAD
for f in archdefs mastsif sifdecode cutest; do \
  echo "source $(brew --prefix $f)/$f.bashrc" >> \
  $HOME/.bashrc; \
done
echo 'export LD_LIBRARY_PATH="$HOME/.linuxbrew/lib:$LD_LIBRARY_PATH"' >> $HOME/.bashrc
source $HOME/.bashrc
