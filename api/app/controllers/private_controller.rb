# frozen_string_literal: true

class PrivateController < ApplicationController
  before_action :authorize
  before_action :set_user_time_zone

  # 下記はスコープのチェックまで行う際のサンプルです。
  def private_scoped
    validate_permissions ['read:messages'] do
      render json: { message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.' }
    end
  end

  private

  def set_user_time_zone
    Time.zone = current_user.time_zone if current_user
  end
end
