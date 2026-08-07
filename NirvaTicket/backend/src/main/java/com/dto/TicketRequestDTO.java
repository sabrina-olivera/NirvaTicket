package com.dto;

import java.util.List;

public class TicketRequestDTO {

    private Long clientId;
    private Long userId;
    private List<TicketDetailRequestDTO> details;

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<TicketDetailRequestDTO> getDetails() {
        return details;
    }

    public void setDetails(List<TicketDetailRequestDTO> details) {
        this.details = details;
    }
}
