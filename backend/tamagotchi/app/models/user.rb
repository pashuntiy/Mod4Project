class User < ApplicationRecord
  has_many :pets

  has_secure_password

  validates_presence_of :username
  validates_uniqueness_of :username, :case_sensitive => false

end
