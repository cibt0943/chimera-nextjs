# frozen_string_literal: true

class PrivateController < ApplicationController
  before_action :authorize

  # 下記はスコープのチェックまで行う際のサンプルです。
  def private_scoped
    validate_permissions ['read:messages'] do
      render json: { message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.' }
    end
  end
end
