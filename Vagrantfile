# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.network "forwarded_port", guest: 80, host: 8000, auto_correct: true
  config.vm.network "forwarded_port", guest: 8000, host: 8001, auto_correct: true

  config.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
    ansible.galaxy_role_file= "ansible/requirements.yml"
    ansible.extra_vars = {
        ansible_python_interpreter: "/usr/bin/python3.6",
    }
  end
end
